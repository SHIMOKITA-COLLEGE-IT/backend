import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutRootsInput } from './my-roots-create-without-roots.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutRootsInput } from './my-roots-create-or-connect-without-roots.input';
import { MyRootsUpsertWithWhereUniqueWithoutRootsInput } from './my-roots-upsert-with-where-unique-without-roots.input';
import { MyRootsCreateManyRootsInputEnvelope } from './my-roots-create-many-roots-input-envelope.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { MyRootsUpdateWithWhereUniqueWithoutRootsInput } from './my-roots-update-with-where-unique-without-roots.input';
import { MyRootsUpdateManyWithWhereWithoutRootsInput } from './my-roots-update-many-with-where-without-roots.input';
import { MyRootsScalarWhereInput } from './my-roots-scalar-where.input';

@InputType()
export class MyRootsUncheckedUpdateManyWithoutRootsNestedInput {

    @Field(() => [MyRootsCreateWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsCreateWithoutRootsInput)
    create?: Array<MyRootsCreateWithoutRootsInput>;

    @Field(() => [MyRootsCreateOrConnectWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutRootsInput)
    connectOrCreate?: Array<MyRootsCreateOrConnectWithoutRootsInput>;

    @Field(() => [MyRootsUpsertWithWhereUniqueWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsUpsertWithWhereUniqueWithoutRootsInput)
    upsert?: Array<MyRootsUpsertWithWhereUniqueWithoutRootsInput>;

    @Field(() => MyRootsCreateManyRootsInputEnvelope, {nullable:true})
    @Type(() => MyRootsCreateManyRootsInputEnvelope)
    createMany?: MyRootsCreateManyRootsInputEnvelope;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    set?: Array<MyRootsWhereUniqueInput>;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    disconnect?: Array<MyRootsWhereUniqueInput>;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    delete?: Array<MyRootsWhereUniqueInput>;

    @Field(() => [MyRootsWhereUniqueInput], {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    connect?: Array<MyRootsWhereUniqueInput>;

    @Field(() => [MyRootsUpdateWithWhereUniqueWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsUpdateWithWhereUniqueWithoutRootsInput)
    update?: Array<MyRootsUpdateWithWhereUniqueWithoutRootsInput>;

    @Field(() => [MyRootsUpdateManyWithWhereWithoutRootsInput], {nullable:true})
    @Type(() => MyRootsUpdateManyWithWhereWithoutRootsInput)
    updateMany?: Array<MyRootsUpdateManyWithWhereWithoutRootsInput>;

    @Field(() => [MyRootsScalarWhereInput], {nullable:true})
    @Type(() => MyRootsScalarWhereInput)
    deleteMany?: Array<MyRootsScalarWhereInput>;
}
