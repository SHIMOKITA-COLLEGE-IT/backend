import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutProfileInput } from './my-roots-create-without-profile.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutProfileInput } from './my-roots-create-or-connect-without-profile.input';
import { MyRootsUpsertWithWhereUniqueWithoutProfileInput } from './my-roots-upsert-with-where-unique-without-profile.input';
import { MyRootsCreateManyProfileInputEnvelope } from './my-roots-create-many-profile-input-envelope.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { MyRootsUpdateWithWhereUniqueWithoutProfileInput } from './my-roots-update-with-where-unique-without-profile.input';
import { MyRootsUpdateManyWithWhereWithoutProfileInput } from './my-roots-update-many-with-where-without-profile.input';
import { MyRootsScalarWhereInput } from './my-roots-scalar-where.input';

@InputType()
export class MyRootsUncheckedUpdateManyWithoutProfileNestedInput {

    @Field(() => [MyRootsCreateWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsCreateWithoutProfileInput)
    create?: Array<MyRootsCreateWithoutProfileInput>;

    @Field(() => [MyRootsCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<MyRootsCreateOrConnectWithoutProfileInput>;

    @Field(() => [MyRootsUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<MyRootsUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => MyRootsCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => MyRootsCreateManyProfileInputEnvelope)
    createMany?: MyRootsCreateManyProfileInputEnvelope;

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

    @Field(() => [MyRootsUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<MyRootsUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [MyRootsUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => MyRootsUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<MyRootsUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [MyRootsScalarWhereInput], {nullable:true})
    @Type(() => MyRootsScalarWhereInput)
    deleteMany?: Array<MyRootsScalarWhereInput>;
}
