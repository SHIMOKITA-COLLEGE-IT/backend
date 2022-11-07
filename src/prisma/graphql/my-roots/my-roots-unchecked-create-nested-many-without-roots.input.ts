import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutRootsInput } from './my-roots-create-without-roots.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutRootsInput } from './my-roots-create-or-connect-without-roots.input';
import { MyRootsCreateManyRootsInputEnvelope } from './my-roots-create-many-roots-input-envelope.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';

@InputType()
export class MyRootsUncheckedCreateNestedManyWithoutRootsInput {

    @Field(() => [MyRootsCreateWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsCreateWithoutRootsInput)
    create?: Array<MyRootsCreateWithoutRootsInput>;

    @Field(() => [MyRootsCreateOrConnectWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutRootsInput)
    connectOrCreate?: Array<MyRootsCreateOrConnectWithoutRootsInput>;

    @Field(() => MyRootsCreateManyRootsInputEnvelope, {nullable:true})
    @Type(() => MyRootsCreateManyRootsInputEnvelope)
    createMany?: MyRootsCreateManyRootsInputEnvelope;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    connect?: Array<MyRootsWhereUniqueInput>;
}
